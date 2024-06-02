import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const DashboardTable = () => {
  return (
    <div className="space-y-6 pt-5">
      <h2 className="lg:text-lg font-semibold text-slate-500">Dashboard Table</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">No.</TableHead>
            <TableHead>Table Head A</TableHead>
            <TableHead>Table Head B</TableHead>
            <TableHead>Table Head C</TableHead>
            <TableHead className="text-right">Table Head D</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell className="font-medium">Content A</TableCell>
            <TableCell>Content B</TableCell>
            <TableCell>Content C</TableCell>
            <TableCell className="text-right">Content D</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell className="font-medium">Content A</TableCell>
            <TableCell>Content B</TableCell>
            <TableCell>Content C</TableCell>
            <TableCell className="text-right">Content D</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
