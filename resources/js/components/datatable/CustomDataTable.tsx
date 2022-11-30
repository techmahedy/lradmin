import React, { useEffect, useState } from "react";
import { forEach, reduce } from "lodash";
import { utils, write } from "xlsx";

import { AxiosAuthInstance } from "../../config/api/auth.axios";
import MUIDataTable from "mui-datatables";
import { retriveFromObject } from "../../helper";
import { saveAs } from "file-saver";
import { useDebounce } from "ahooks";
import ContentLoading from "../loader/ContentLoader";

interface IFDataTable {
  title?: any;
  data?: any;
  columns?: Array<any>;
  options?: any;
  pagination?: any;
  apiQuery?: any;
  loading?: any;
  downloadOption?: {
    downloadUrl: any;
    urlMethod?: {
      method: any;
      formData?: any;
    };
    authorization: boolean;
    key: any;
  };
}

const CustomDataTable = ({
  title,
  data,
  columns,
  options,
  pagination,
  apiQuery,
  downloadOption,
  loading
}: IFDataTable) => {

  const [searchQuery, setSearchQuery] = useState<any>({
    page: "",
    take: pagination?.per_page ? pagination?.per_page : 10,
    searchTerm: "",
  });

  useEffect(() => {
    apiQuery(searchQuery);
  }, [searchQuery]);

  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce(value, { wait: 500 });

  useEffect(() => {
    setSearchQuery({
      ...searchQuery,
      searchTerm: debouncedValue,
    });
  }, [debouncedValue]);

  options = {
    ...options,
    selectableRowsHideCheckboxes: false,
    responsive: 'standard',
    fixedHeader: true,
    sortOrder: {
      name: "SL No.",
      direction: "asc",
    },
    filter: false,
    print: true,
    onRowsDelete: (rowsDeleted, newData) => {
      console.dir(rowsDeleted);
    },
    onDownload: (buildHead, buildBody, col, values) => {
      const totalKeys = [...downloadOption?.key];
      //! Selected Columns and Keys
      forEach(columns, (c, idx) => {
        if (!col.find((o) => o.name === c)) {
          delete totalKeys[idx];
        }
      });

      const newKeys = totalKeys?.filter(function (el) {
        return el != null;
      });

      //! Selected Columns and Keys End

      if (downloadOption?.urlMethod?.method === "POST") {
        AxiosAuthInstance.post(
          downloadOption?.downloadUrl,
          downloadOption?.urlMethod?.formData
        ).then(
          (res: any) => {
            const fileType =
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
            const fileExtension = ".xlsx";

            const json = reduce(
              res?.data?.data[Object.keys(res?.data?.data)[0]]?.data,
              (result: any[], val, i) => {
                const temp = {};
                forEach(newKeys, (key, idx) => {
                  //! Data Serial Number.... SL fixed for Every One
                  if (key == "SL") {
                    temp[col[idx]?.name] = i + 1;
                  } else {
                    //! Action Column Remove
                    if (col[idx]?.name !== "Action") {
                      //! Custom Column Value
                      if (typeof key === "object") {
                        if (key.key === "STRING") {
                          temp[col[idx]?.name] = key?.value();
                        }
                        //! From Sub Array
                        if (Array.isArray(key?.key)) {
                          const arr = key?.key?.map((k, i) => {
                            if (Array.isArray(retriveFromObject(k, val))) {
                              return retriveFromObject(k, val)
                                ?.map((j) => j[key?.subKey[i]])
                                .join();
                            } else {
                              return retriveFromObject(k, val);
                            }
                          });
                          temp[col[idx]?.name] = key?.value(arr?.join());
                        }
                      } else {
                        temp[col[idx]?.name] = retriveFromObject(key, val);
                      }
                    }
                  }
                });
                result.push(temp);
                return result;
              },
              []
            );
            const fileName = title;
            const ws = utils.json_to_sheet(json);
            const wb = {
              Sheets: { data: ws },
              SheetNames: ["data"],
            };
            const excelBuffer = write(wb, {
              bookType: "xlsx",
              type: "array",
            });
            const data = new Blob([excelBuffer], {
              type: fileType,
            });
            saveAs(data, fileName + fileExtension);
          },
          (error: any) => {
            console.log(error);
          }
        );
      } else {
        AxiosAuthInstance.get(downloadOption?.downloadUrl).then(
          (res: any) => {
            const fileType =
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
            const fileExtension = ".xlsx";

            const json = reduce(
              res?.data?.data[Object.keys(res?.data?.data)[0]]?.data,
              (result: any[], val, i) => {
                const temp = {};
                forEach(newKeys, (key, idx) => {
                  //! Data Serial Number.... SL fixed for Every One
                  if (key == "SL") {
                    temp[col[idx]?.name] = i + 1;
                  } else {
                    //! Action Column Remove
                    if (col[idx]?.name !== "Action") {
                      //! Custom Column Value
                      if (typeof key === "object") {
                        if (key.key === "STRING") {
                          temp[col[idx]?.name] = key?.value();
                        }
                        //! From Sub Array
                        if (Array.isArray(key?.key)) {
                          const arr = key?.key?.map((k, i) => {
                            if (Array.isArray(retriveFromObject(k, val))) {
                              return retriveFromObject(k, val)
                                ?.map((j) => j[key?.subKey[i]])
                                .join();
                            } else {
                              return retriveFromObject(k, val);
                            }
                          });
                          temp[col[idx]?.name] = key?.value(arr?.join());
                        }
                      } else {
                        temp[col[idx]?.name] = retriveFromObject(key, val);
                      }
                    }
                  }
                });
                result.push(temp);
                return result;
              },
              []
            );
            const fileName = title;
            const ws = utils.json_to_sheet(json);
            const wb = {
              Sheets: { data: ws },
              SheetNames: ["data"],
            };
            const excelBuffer = write(wb, {
              bookType: "xlsx",
              type: "array",
            });
            const data = new Blob([excelBuffer], {
              type: fileType,
            });
            saveAs(data, fileName + fileExtension);
          },
          (error: any) => {
            console.log(error);
          }
        );
      }
      return false;
    },

    downloadOptions: {
      filterOptions: {
        useDisplayedColumnsOnly: true,
      },
    },

    textLabels: {
      toolbar: {
        downloadCsv: "Download Excel",
      },
      body: {
        noMatch: loading ? (
          <div className="d-flex justify-content-center">
            {" "}
            <ContentLoading />{" "}
          </div>
        ) : (
          "Sorry, no matching records found"
        ),
      },
    },
    count: pagination?.total,
    rowsPerPage: parseInt(searchQuery?.take),
    rowsPerPageOptions: [5, 10, 15, 20, 50, 100],
    jumpToPage: true,
    serverSide: true,
    onChangePage(currentPage: any) {
      setSearchQuery({ ...searchQuery, page: parseInt(currentPage + 1) });
    },
    onSearchChange(searchText: any) {
      setValue(searchText === null ? "" : searchText);
    },
    onChangeRowsPerPage(numberOfRows: number) {
      setSearchQuery({
        ...searchQuery,
        take: numberOfRows,
      });
    },
  };
  return (
    <div>
      <MUIDataTable
        title={title}
        data={data}
        columns={columns?.map((columName,index) => {
          return {
            name: columName,
            options: {
              filter: true,
              sort: true,
            }
          };
        }) || [] }
        options={options}
      />
    </div>
  );
};

export default CustomDataTable;
