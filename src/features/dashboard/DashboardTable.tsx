import dayjs from "dayjs";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { EventType } from "@/types/event";
import { Pencil, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import AddEvent from "./AddEvent";

type Props = {
  dataSource: EventType[];
};

export const DashboardTable = ({ dataSource }: Props) => {
  return (
    <div className="space-y-6 pt-5">
      <div className="flex items-center justify-between gap-5">
        <h2 className="lg:text-lg font-bold text-slate-500">Events</h2>
        <AddEvent />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Event ID</TableHead>
            <TableHead>Event name</TableHead>
            <TableHead>Company Name</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Remarks</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dataSource.map((data) => (
            <TableRow key={data._id}>
              <TableCell className="font-medium">{data.event_id}</TableCell>
              <TableCell className="font-medium">{data.event_name}</TableCell>
              <TableCell>{data.company_name}</TableCell>
              <TableCell>{data.location}</TableCell>
              <TableCell>{data.remarks ?? "-"}</TableCell>
              <TableCell>{dayjs(data.date_created).format("DD MMM YYYY")}</TableCell>
              <TableCell className="text-center">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full ring ring-green-100 hover:bg-green-500/90 transition-all">
                  {data.status}
                </span>
              </TableCell>
              <TableCell className="text-center">
                <div className="flex items-center">
                  <Button variant="ghost" size="sm">
                    <Pencil className="text-green-600 h-5 w-5" />
                  </Button>
                  <Button variant="ghost">
                    <Trash className="text-rose-600 h-5 w-5" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
