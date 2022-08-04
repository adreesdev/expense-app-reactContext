import React, { createContext, useState } from "react";
import dayjs from "dayjs";
export const ExpenseContext = createContext();
let tableData = [];

const ContextAPI = (props) => {
	const headCells = [
		{
			id: "name",
			numeric: false,
			label: "Name",
		},
		{
			id: "type",
			numeric: false,
			label: "Type",
		},
		{
			id: "amount",
			numeric: false,
			label: "Amount",
		},
		{
			id: "timestamp",
			numeric: false,
			label: "Date",
		},
	];

	let expenses = JSON.parse(localStorage.getItem("expenses"));
	if (expenses) {
		tableData = expenses;
	}

	const [order, setOrder] = useState("asc");
	const [orderBy, setOrderBy] = useState("amount");

	const [openAdd, setOpenAdd] = useState(false);
	const handleOpenAdd = () => setOpenAdd(true);
	const handleCloseAdd = () => setOpenAdd(false);
	const [openEdit, setOpenEdit] = useState(false);
	const handleOpenEdit = () => setOpenEdit(true);
	const handleCloseEdit = () => setOpenEdit(false);
	const [openDelete, setOpenDelete] = useState(false);
	const handleOpenDelete = () => setOpenDelete(true);
	const handleCloseDelete = () => setOpenDelete(false);

	let handleAddExpense = (name, amount, type) => {
		let now = dayjs();
		tableData.push({
			type: type,
			name: name,
			amount: +amount,
			date: now.format("MMMM-DD-YYYY / HH:mm:ss"),
			timestamp: now.unix(),
		});
		handleCloseAdd();
		localStorage.setItem("expenses", JSON.stringify(tableData));
	};
	let handleEditExpense = (name, amount, type, timestamp) => {
		tableData = tableData.map((x) =>
			x.timestamp === timestamp
				? { ...x, type: type, name: name, amount: +amount }
				: x
		);
		localStorage.setItem("expenses", JSON.stringify(tableData));
		handleCloseEdit();
	};
	let handleDeleteExpense = (timestamp) => {
		tableData = tableData.filter((expense) => expense.timestamp !== timestamp);
		localStorage.setItem("expenses", JSON.stringify(tableData));
		handleCloseDelete();
	};

	const handleRequestSort = (property) => {
		const isAsc = orderBy === property && order === "asc";
		setOrder(isAsc ? "desc" : "asc");
		setOrderBy(property);
	};

	return (
		<ExpenseContext.Provider
			value={{
				tableData,
				handleOpenAdd,
				handleOpenEdit,
				handleOpenDelete,
				handleCloseAdd,
				handleCloseEdit,
				handleCloseDelete,
				order,
				orderBy,
				handleRequestSort,
				openAdd,
				openEdit,
				openDelete,
				headCells,
				handleAddExpense,
				handleEditExpense,
				handleDeleteExpense,
			}}
		>
			{props.children}
		</ExpenseContext.Provider>
	);
};

export default ContextAPI;
