import {
	Box,
	TableCell,
	TableHead,
	TableRow,
	TableSortLabel,
} from "@mui/material";
import React, { useContext } from "react";
import { visuallyHidden } from "@mui/utils";
import { ExpenseContext } from "../ContextAPI";

const ExpenseHeader = () => {
	const { order, orderBy, handleRequestSort, headCells } =
		useContext(ExpenseContext);

	return (
		<TableHead>
			<TableRow>
				{headCells.map((headCell) => (
					<TableCell
						key={headCell.id}
						align={headCell.numeric ? "right" : "left"}
						sortDirection={orderBy === headCell.id ? order : false}
					>
						<TableSortLabel
							active={orderBy === headCell.id}
							direction={orderBy === headCell.id ? order : "asc"}
							onClick={() => handleRequestSort(headCell.id)}
						>
							{headCell.label}
							{orderBy === headCell.id ? (
								<Box component="span" sx={visuallyHidden}>
									{order === "desc" ? "sorted descending" : "sorted ascending"}
								</Box>
							) : null}
						</TableSortLabel>
					</TableCell>
				))}
				<TableCell>Actions</TableCell>
			</TableRow>
		</TableHead>
	);
};

export default ExpenseHeader;
