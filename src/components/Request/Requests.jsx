import React, { useState } from "react";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const createData = (name, calories, fat, carbs, protein, ss1, ss2, ss3) => {
  return { name, calories, fat, carbs, protein, ss1, ss2, ss3 };
};

const Requests = () => {
  const rows = [
    createData("Cooper Kriston", "quasiah@gmail.com",  "(229) 555-0109", "8 Sep, 2020", "Jul 19, 2024", "Signature", "AED 000", "View"),
    createData("Cooper Kriston", "quasiah@gmail.com",  "(229) 555-0109", "8 Sep, 2020", "Jul 19, 2024", "Signature", "AED 000", "View"),
    createData("Cooper Kriston", "quasiah@gmail.com",  "(229) 555-0109", "8 Sep, 2020", "Jul 19, 2024", "Signature", "AED 000", "View"),
    createData("Cooper Kriston", "quasiah@gmail.com",  "(229) 555-0109", "8 Sep, 2020", "Jul 19, 2024", "Signature", "AED 000", "View"),
    createData("Cooper Kriston", "quasiah@gmail.com",  "(229) 555-0109", "8 Sep, 2020", "Jul 19, 2024", "Signature", "AED 000", "View"),
    createData("Cooper Kriston", "quasiah@gmail.com",  "(229) 555-0109", "8 Sep, 2020", "Jul 19, 2024", "Signature", "AED 000", "View"),
    createData("Cooper Kriston", "quasiah@gmail.com",  "(229) 555-0109", "8 Sep, 2020", "Jul 19, 2024", "Signature", "AED 000", "View"),
    createData("Cooper Kriston", "quasiah@gmail.com",  "(229) 555-0109", "8 Sep, 2020", "Jul 19, 2024", "Signature", "AED 000", "View"),
    createData("Cooper Kriston", "quasiah@gmail.com",  "(229) 555-0109", "8 Sep, 2020", "Jul 19, 2024", "Signature", "AED 000", "View"),
    createData("Cooper Kriston", "quasiah@gmail.com",  "(229) 555-0109", "8 Sep, 2020", "Jul 19, 2024", "Signature", "AED 000", "View"),
    createData("Cooper Kriston", "quasiah@gmail.com",  "(229) 555-0109", "8 Sep, 2020", "Jul 19, 2024", "Signature", "AED 000", "View"),
  ];

  const [open, setOpen] = useState(1);

  const handleClick = (index) => () => {
    setOpen(index);
  };

  const buttons = [
    { id: 1, label: "All" },
    { id: 2, label: "Signature" },
    { id: 3, label: "Deluxe" },
    { id: 4, label: "Premium" },
    { id: 5, label: "Individual" },
    { id: 6, label: "Custom" },
  ];

  return (
    <div className="mx-4">
      <h1 className="text-[33px] font-bold text-white mt-4">Requests</h1>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 mt-6">
          {buttons.map((button) => (
            <button
              key={button.id}
              onClick={handleClick(button.id)}
              className={`${
                open === button.id
                  ? "bg-[#161C27] rounded-md py-2 px-6 text-[12px]"
                  : "text-[12px] border-[1px] border-[#1e2635] py-2 px-6 rounded-md"
              } text-[#dddddd]`}
            >
              {button.label}
            </button>
          ))}
        </div>
        <input
          className="bg-[#161C27] py-2 px-6 mt-6"
          type="search"
          placeholder="search"
        />
      </div>
      <div className=" mt-8">
        <TableContainer component={Paper} sx={{ width: "100%" }}>
          <Table sx={{ width: "100%", backgroundColor: "black", color: "white" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "white", }}>Name</TableCell>
                <TableCell sx={{ color: "white", }} align="right">E-mail Address</TableCell>
                <TableCell sx={{ color: "white", }} align="right">Phone Number</TableCell>
                <TableCell sx={{ color: "white", }} align="right">Request Date</TableCell>
                <TableCell sx={{ color: "white", }} align="right">Event Date</TableCell>
                <TableCell sx={{ color: "white", }} align="right">Packages</TableCell>
                <TableCell sx={{ color: "white", }} align="right">Price</TableCell>
                <TableCell sx={{ color: "white", }} align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 }, marginBottom: "10px" }} // Adjust marginBottom as needed
                >
                  <TableCell sx={{ color: "white", border:"none" }} component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell sx={{ color: "#dddddd", border:"none" }} align="right">{row.calories}</TableCell>
                  <TableCell sx={{ color: "#dddddd", border:"none" }} align="right">{row.fat}</TableCell>
                  <TableCell sx={{ color: "#dddddd", border:"none" }} align="right">{row.carbs}</TableCell>
                  <TableCell sx={{ color: "#dddddd", border:"none" }} align="right">{row.protein}</TableCell>
                  <TableCell sx={{ color: "#dddddd", border:"none" }} align="center"><div className=" bg-[#fdcc6042]">{row.ss1}</div></TableCell>
                  <TableCell sx={{ color: "#dddddd", border:"none" }} align="right">{row.ss2}</TableCell>
                  <TableCell sx={{ color: "#dddddd", border:"none" }} align="right"> <Link to="/admin/request/review12" className=" text-[#FFEDA4]">{row.ss3}</Link></TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Requests;
