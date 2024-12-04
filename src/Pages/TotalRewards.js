import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { totalRewards } from "../Data/TotalRewardsData";
import logger from "../Utils/logger";

export function TotalRewardsTable() {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = () => {
			logger.log("Total Rewards Data fetched successfully.");
			setData(totalRewards);
			setLoading(false);
		};

		fetchData();
	}, []);

	return (
		<div>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 650 }} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>Transaction ID</TableCell>
								<TableCell>Customer ID</TableCell>
								<TableCell>Date of transaction</TableCell>
								<TableCell>Total Amount</TableCell>
								<TableCell>Total Points</TableCell>
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
