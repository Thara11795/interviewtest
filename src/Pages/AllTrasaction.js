import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { allTransactions } from "../Data/AllTransactionData";
import logger from "../Utils/logger";

export function AllTransactionTable() {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            logger.log("All transactions data fetched successfully.");
            setData(allTransactions);
            setLoading(false);
        };

        fetchData();
    }, [data]);

    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell component="th">Transaction ID</TableCell>
                                <TableCell component="th">Customer ID</TableCell>
                                <TableCell component="th">Date of transaction</TableCell>
                                <TableCell component="th">Total Amount</TableCell>
                                <TableCell component="th">Total Points</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row">
                                        {row.transactionId}
                                    </TableCell>
                                    <TableCell>{row.customerId}</TableCell>
                                    <TableCell>{row.dateOfTransaction}</TableCell>
                                    <TableCell>{row.totalAmount}</TableCell>
                                    <TableCell>{row.totalPoints}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </div>
    );
}
