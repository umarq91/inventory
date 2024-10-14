import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { carsData } from '../constant/cars'

function SoldCars() {
  // Filter for sold cars only
  // const soldCars = carsData.filter(car => car.status === "sold");

  // Calculate total amount for sold cars
  const totalAmount = carsData.reduce((total, car) => total + car.sellPrice, 0);

  return (
    <div>
    <div className='bg-white p-4'>
      <div className='text-center '> 
         <h1 className='font-bold text-3xl'> List Of sold Cars </h1>
         <div className="mb-4 text-center">
          <label htmlFor="year" className="mr-2 font-bold">Filter by Year:</label>
          <select
            id="year"
            className="border rounded px-2 py-1"
            value={""}
            onChange={(e) => {}}
          >
            <option value="All">All Years</option>
            <option value="All months">All Months</option>

            {/* {uniqueYears.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))} */}
          </select>
        </div>

      </div>
      <Table>
        <TableCaption>List of Sold Cars and their Amounts</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[250px]">Car Name</TableHead> {/* More space for car names */}
            <TableHead className="w-[150px]">Model</TableHead>
            <TableHead className="w-[100px]">Year</TableHead>
            <TableHead className="w-[100px] text-right">Amount (Rs)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Dynamic Rows */}
          {carsData.map((car) => (
            <TableRow key={car.id}>
              <TableCell>{car.name}</TableCell>
              <TableCell>{car.model}</TableCell>
              <TableCell>{car.year}</TableCell>
              <TableCell className="text-right">{car.sellPrice} Rs</TableCell>
            </TableRow>
          ))}
          {/* Total Row */}
          <TableRow className='bg-gray-200'>
            <TableCell className="font-bold text-right" colSpan={3}>Total</TableCell>
            <TableCell className="font-bold text-right">{totalAmount} Rs</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
    </div>
  );
}

export default SoldCars;
