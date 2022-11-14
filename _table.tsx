import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
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
    
    const deleteCondition = conditionID => {
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
                    history.push('/condition');
                    Swal.fire(
                        'Deleted!',
                        'Condition has been deleted.',
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
							        <table className="table app-table-hover mb-0 text-left">
										<thead>
											<tr>
												<th className="cell">Order</th>
												<th className="cell">Product</th>
												<th className="cell">Customer</th>
												<th className="cell">Date</th>
												<th className="cell">Status</th>
												<th className="cell">Total</th>
												<th className="cell"></th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td className="cell">#15346</td>
												<td className="cell"><span className="truncate">Lorem ipsum dolor sit amet eget volutpat erat</span></td>
												<td className="cell">John Sanders</td>
												<td className="cell"><span>17 Oct</span><span className="note">2:16 PM</span></td>
												<td className="cell"><span className="badge bg-success">Paid</span></td>
												<td className="cell">$259.35</td>
												<td className="cell"><a className="btn-sm app-btn-secondary" href="#">View</a></td>
											</tr>
										</tbody>
									</table>
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