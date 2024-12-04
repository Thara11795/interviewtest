import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { MonthlyRewardTable } from "./Pages/MonthlyRewards";
import { TotalRewardsTable } from "./Pages/TotalRewards";
import { AllTransactionTable } from "./Pages/AllTrasaction";

export function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		"aria-controls": `full-width-tabpanel-${index}`,
	};
}

export default React.memo(function FullWidthTabs() {
	const theme = useTheme();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ bgcolor: "background.paper", width: "100%" }}>
			<AppBar position="static">
				<Tabs
					value={value}
					onChange={handleChange}
					indicatorColor="secondary"
					textColor="inherit"
					variant="fullWidth"
					aria-label="full width tabs example"
				>
					<Tab label="Monthly Rewards" {...a11yProps(0)} />
					<Tab label="Total Rewards" {...a11yProps(1)} />
					<Tab label="All Transaction" {...a11yProps(2)} />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0} dir={theme.direction}>
				<MonthlyRewardTable />
			</TabPanel>
			<TabPanel value={value} index={1} dir={theme.direction}>
				<TotalRewardsTable />
			</TabPanel>
			<TabPanel value={value} index={2} dir={theme.direction}>
				<AllTransactionTable />
			</TabPanel>
		</Box>
	);
});
