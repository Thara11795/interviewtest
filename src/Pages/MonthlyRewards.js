import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { MonthlyRewards, RecentMonths } from "../Data/MonthlyRewardsData";
import logger from "../Utils/logger";

export function MonthlyRewardTable() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            logger.log("Monthly Rewards Data fetched successfully.");
            setData(MonthlyRewards);
            setLoading(false);
        };

        fetchData();
    }, []);

    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <>
                    {RecentMonths.map((month) => {
                        const year =
                            data.find((row) => row.month === month)?.year || "N/A";

                        return (
                            <TableContainer
                                component={Paper}
                                key={month}
                                sx={{ marginBottom: 4 }}
                            >
                                <h1>
                                    {month} - {year}
                                </h1>
                                <hr />
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Transaction ID</TableCell>
                                            <TableCell>Customer ID</TableCell>
                                            <TableCell>Month</TableCell>
                                            <TableCell>Year</TableCell>
                                            <TableCell>Total Amount</TableCell>
                                            <TableCell>Total Points</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {data
                                            .filter((row) => row.month === month)
                                            .map((row, index) => (
                                                <TableRow key={index}>
                                                    <TableCell component="th" scope="row">
                                                        {row.transactionId}
                                                    </TableCell>
                                                    <TableCell>{row.customerId}</TableCell>
                                                    <TableCell>{row.month}</TableCell>
                                                    <TableCell>{row.year}</TableCell>
                                                    <TableCell>{row.totalAmount}</TableCell>
                                                    <TableCell>{row.totalPoints}</TableCell>
                                                </TableRow>
                                            ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        );
                    })}
                </>
            )}
        </div>
    );
}
