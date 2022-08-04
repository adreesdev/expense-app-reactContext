import React, { useContext } from "react";
import { TableRow, TableCell, Button, Modal } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import EditExpense from "./EditExpense";
import { ExpenseContext } from "../ContextAPI";
import DeleteExpense from "./DeleteExpense";
let timestamp;
let name, amount, type;
const Expenses = ({ row }) => {
	const {
		handleCloseEdit,
		openEdit,
		handleOpenEdit,
		handleCloseDelete,
		openDelete,
		handleOpenDelete,
	} = useContext(ExpenseContext);

	let deleteEx = () => {
		handleOpenDelete();
		timestamp = row.timestamp;
	};
	let EditEx = () => {
		handleOpenEdit();
		name = row.name;
		amount = row.amount;
		type = row.type;
		timestamp = row.timestamp;
	};
	return (
		<>
			<TableRow hover tabIndex={-1}>
				<TableCell component="th" scope="row">
					{row.name}
				</TableCell>
				<TableCell align="left">{row.type}</TableCell>
				<TableCell align="left">{row.amount}</TableCell>
				<TableCell align="left">{row.date}</TableCell>
				<TableCell>
					<Button variant="contained" color="success" onClick={EditEx}>
						<EditIcon />
					</Button>
					<Modal
						open={openEdit}
						onClose={handleCloseEdit}
						aria-labelledby="modal-modal-title"
						aria-describedby="modal-modal-description"
					>
						<EditExpense
							name={name}
							amount={amount}
							type={type}
							timestamp={timestamp}
						/>
					</Modal>
					&nbsp;
					<Button variant="contained" color="error" onClick={deleteEx}>
						<DeleteIcon />
					</Button>
					<Modal
						open={openDelete}
						onClose={handleCloseDelete}
						aria-labelledby="modal-modal-title"
						aria-describedby="modal-modal-description"
					>
						<DeleteExpense timestamp={timestamp} />
					</Modal>
				</TableCell>
			</TableRow>
		</>
	);
};

export default Expenses;
