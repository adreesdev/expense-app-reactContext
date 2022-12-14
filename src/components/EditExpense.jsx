import {
	Box,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	OutlinedInput,
	Select,
	TextField,
	Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { ExpenseContext } from "../ContextAPI";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 500,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
};

const EditExpense = (props) => {
	const { handleEditExpense } = useContext(ExpenseContext);
	const [name, setName] = useState(props.name);
	const [amount, setAmount] = useState(props.amount);
	const [type, setType] = useState(props.type);
	return (
		<>
			<Box sx={style}>
				<Typography variant="h4">Edit Expense</Typography>
				<Box sx={{ mt: 3 }}>
					<TextField
						label="Name"
						variant="outlined"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</Box>
				<Box sx={{ mt: 3 }}>
					<FormControl sx={{ minWidth: 220 }}>
						<InputLabel htmlFor="filter1">Type</InputLabel>
						<Select
							value={type}
							onChange={(e) => setType(e.target.value)}
							input={<OutlinedInput label="Type" id="filter1" />}
						>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							<MenuItem value="Rent">Rent</MenuItem>
							<MenuItem value="Utility">Utility</MenuItem>
							<MenuItem value="Medical">Medical</MenuItem>
							<MenuItem value="Food">Food</MenuItem>
							<MenuItem value="Other">Other</MenuItem>
						</Select>
					</FormControl>
				</Box>
				<Box sx={{ mt: 3 }}>
					<TextField
						label="Amount"
						type="number"
						variant="outlined"
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
					/>
				</Box>
				<Box sx={{ mt: 3 }}>
					<Button
						variant="contained"
						color="success"
						onClick={() =>
							handleEditExpense(name, amount, type, props.timestamp)
						}
					>
						Update
					</Button>
				</Box>
			</Box>
		</>
	);
};

export default EditExpense;
