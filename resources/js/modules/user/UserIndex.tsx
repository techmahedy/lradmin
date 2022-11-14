import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Header from "../../components/layouts/Header";
import { userGetAction } from "./redux/user.actions";
import Swal from "sweetalert2";
import CustomDataTable from "../../components/datatable/CustomDataTable";
import SnackBarAlert from "../../components/snackbar/SnackBarAlert";

const UserIndex = () => {
    
    const userStateData = useSelector((state: any) => state.userState);

    const dispatch: any = useDispatch();
    const history = useHistory();

    const [query, setQuery] = useState({
        searchTerm: "",
        take: "10",
        page: "1",
    });

    useEffect(() => {
        dispatch(userGetAction(query));
    }, [query]);
    
    let tableIndex = userStateData?.data?.data?.users?.from;

    const deleteUser = (id: any) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
            // await dispatch(conditionDeleteAction(conditionID));
            const error = localStorage.getItem("error");
            if (!error) {
                    // dispatch(conditionGetAction(query));
                    history.push('/users');
                    Swal.fire(
                        'Deleted!',
                        'User has been deleted.',
                        'success'
                    )
                }
            }
        })
    }

    return (
        <>  
        <Header/>
        <div className="app-wrapper">
	    <div className="app-content pt-3 p-md-3 p-lg-4">
		    <div className="container-xl">
			    <div className="row g-3 mb-4 align-items-center justify-content-between">
				    <div className="col-auto">
			            <h1 className="app-page-title mb-0">Users</h1>
				    </div>
				    <div className="col-auto">
					    <div className="page-utilities">
						    <div className="row g-2 justify-content-start justify-content-md-end align-items-center">
							    <div className="col-auto">						    
								    <a className="btn app-btn-secondary" href="#">
									    Create New
									</a>
							    </div>
						    </div>
					    </div>
				    </div>
			    </div>
	
				<div className="tab-content" id="orders-table-tab-content">
			        <div className="tab-pane fade show active" id="orders-all" role="tabpanel" aria-labelledby="orders-all-tab">
					    <div className="app-card app-card-orders-table shadow-sm mb-5">
						    <div className="app-card-body">
							    <div className="table-responsive">
                                <CustomDataTable
                                    title=''
                                    loading={userStateData?.loading ? true : false}
                                    columns={[
                                        "User Id",
                                        "User Name",
                                        "Phone",
                                        "Created",
                                        "Action", 
                                    ]}
                                    pagination={userStateData?.data?.data?.users}
                                    apiQuery={(e: any) => setQuery(e)}
                                    data={
                                        userStateData?.data?.data?.users?.data?.length
                                        ? userStateData?.data?.data?.users?.data?.map(
                                            (user: any, index: any) => {
                                                const arr = [
                                                user?.id,
                                                user?.UserName,
                                                user?.Phone,
                                                user?.created_at,
                                                <div className="action-button">
                                                    <Link
                                                        to={`/user/edit/${user?.id}`}
                                                        className="button-edit py-0"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <button className="button-delete py-0" onClick={() => {deleteUser(user?.id)}} >
                                                        Delete
                                                    </button>
                                                </div>
                                                ];
                                                tableIndex++;
                                                return arr;
                                            }
                                        ) : []
                                    }
                                    downloadOption={{
                                        downloadUrl: `/users?search_term=${query?.searchTerm}&take=all`,
                                        authorization: true,
                                        key: [
                                                "id",
                                                "UserName",
                                                "Phone",
                                                "created_at",
                                                null
                                            ]
                                        }}
                                    />
						        </div>
						    </div>		
						</div>
			        </div>
				</div>
		    </div>
	    </div>
    </div>	
    </>
    );
}
export default UserIndex;