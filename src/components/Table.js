import * as React from "react";
import Table from "@mui/material/Table";
import Box from "@mui/material/Box";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData("FCPS ", "Tier 1", "100+", "1x", "1-9"),
    createData("FCPS", "Tier 2", "500+", "2x", "1-9"),
    createData("FCPS", "Tier 3", "1000+", "3x", "1-9"),
    createData("FCPS", "Tier 4", "10000+", "8x", "1-9"),
    createData("FCPS", "Tier 5", "100000+", "16x", "1-9")
];
console.log(rows)
export default function BasicTable() {
    return (
        <Box className="bg-black ">
            <Box className="text-center pt-9 bg-txt " >
                <Typography variant="h4">

                    KickSale Tier & Access to IMO
                </Typography>
            </Box>

            <Box sx={{ width: { md: "70%", xs: "100%" }, margin: "auto", padding: { md: "6rem%", xs: "1rem" }, backgroundColor: "black" }} clasName="bg-table ">

                <TableContainer component={Paper} sx={{ border: "1.7px solid #DDDDDD" }}>
                    <Table
                        sx={{ minWidth: "300px", border: "1.7px solid #DDDDDD" }
                        }
                        aria-label="simple table"

                    >
                        <TableHead sx={{ border: "0.5px solid #DDDDDD" }}>
                            <TableRow >
                                <TableCell sx={{ border: "0.5px solid #DDDDDD" }} >ACCESS</TableCell>

                                <TableCell align="right" sx={{ border: "0.5px solid #DDDDDD" }}  >
                                    TIER
                                </TableCell>
                                <TableCell align="right" sx={{ border: "0.5px solid #DDDDDD" }} >
                                    KICKPOWER <br />REQUIREMENT
                                </TableCell>
                                <TableCell align="right" sx={{ border: "0.5px solid #DDDDDD" }} >
                                    Allocation Tier
                                </TableCell>
                                <TableCell align="right" sx={{ border: "0.5px solid #DDDDDD" }} >
                                    Lottery Pool
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody sx={{ border: "1px solid white" }}>
                            {rows.map((row) => (
                                <TableRow key={row.name} sx={{ border: "0.5px solid #DDDDDD" }}>
                                    <TableCell component="th" scope="row" sx={{ border: "0.5px solid #DDDDDD", py: "2rem" }}  >
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right" sx={{ border: "0.5px solid #DDDDDD", py: "2rem" }} >
                                        {row.calories}
                                    </TableCell>
                                    <TableCell align="right" sx={{ border: "0.5px solid #DDDDDD", py: "2rem" }} >
                                        {row.fat}
                                    </TableCell>
                                    <TableCell align="right" sx={{ border: "0.5px solid #DDDDDD", py: "2rem" }} >
                                        {row.carbs}
                                    </TableCell>
                                    <TableCell align="right" sx={{ border: "0.5px solid #DDDDDD", py: "2rem" }} >
                                        {row.protein}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table >
                </TableContainer >
            </Box>
        </Box >
    );
}
