import {
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { Employee } from "../../types/types";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: ["#336fabe0"],
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

interface EmployeeDataTableInterface {
  employees: Employee[];
  editEmployee: (employeeId: number) => void;
  deleteEmployee: (employeeId: number) => void;
}

const EmployeeDataTable = (props: EmployeeDataTableInterface) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell>Role</StyledTableCell>
            <StyledTableCell sx={{ width: 150 }}>
              Assigned Projects
            </StyledTableCell>
            <StyledTableCell sx={{ width: 100 }} align="center">
              Actions
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.employees.map((employee) => (
            <StyledTableRow
              key={employee.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {employee.name}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {employee.email}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {employee.role}
              </StyledTableCell>

              <StyledTableCell component="th" scope="row">
                <Button variant="text">Projects</Button>
              </StyledTableCell>

              <StyledTableCell component="th" scope="row" align="center">
                <IconButton
                  aria-label="edit"
                  onClick={() => props.editEmployee(employee.id)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  aria-label="delete"
                  onClick={() => props.deleteEmployee(employee.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default EmployeeDataTable;
