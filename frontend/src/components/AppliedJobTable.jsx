import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'


const AppliedJobTable = () => {
  return (
    <div>
        <Table>
            <TableCaption>A List Of Your Appelied Jobs</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>date</TableHead>
                    <TableHead>Job Role</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    [1,2,3].map((item,index) => (
                        <TableRow key={index}>
                            <TableCell>19-01-2026</TableCell>
                            <TableCell>Frontend Developer</TableCell>
                            <TableCell>Google</TableCell>
                            <TableCell className="text-right"><Badge>Selected</Badge></TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </div>
  )
}

export default AppliedJobTable