import {
  Search,
  MoreHorizontal,
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
} from "lucide-react";
import IconButton from "./icon-button";
import Table from "./table/table";
import TableHeader from "./table/table-header";
import TableCell from "./table/table-cell";
import TableRow from "./table/table-row";
import { useState } from "react";
import { attendees } from "../data/attendees";

import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
dayjs.locale("pt-br");

export default function AttendeeList() {
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(attendees.length / 10);
  const isFirstPage = page === 1;
  const isLastPage = page === totalPages;

  
  const goToFirstPage = () => {
    if (isFirstPage) return;
    setPage(1);
  };
  const goToPreviousPage = () => {
    if (isFirstPage) return;
    setPage((s) => s - 1);
  };
  const goToNextPage = () => {
    if (isLastPage) return;
    setPage((s) => s + 1);
  };
  const goToLastPage = () => {
    if (isLastPage) return;
    setPage(totalPages);
  };

  function onSearchInputChanged(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3 ">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="flex w-72 items-center gap-3 rounded-lg border border-white/10  bg-transparent px-3 py-1.5 text-sm ">
          <Search className="size-4 text-emerald-300" />
          <input
            onChange={onSearchInputChanged}
            className="flex-1 border-0 bg-transparent p-0 text-sm outline-none ring-0 "
            placeholder="Buscar participantes..."
          />
        </div>
        {search}
      </div>
      <Table>
        <thead>
          <TableRow>
            <TableHeader
              style={{
                width: 48,
              }}
            >
              <input
                className="size-4 rounded border border-white/10 bg-black/20  "
                type="checkbox"
                name=""
                id=""
              />
            </TableHeader>
            <TableHeader>Código</TableHeader>
            <TableHeader>Participante</TableHeader>
            <TableHeader>Data de inscrição</TableHeader>
            <TableHeader>Data do check-in</TableHeader>
            <TableHeader
              style={{
                width: 64,
              }}
            ></TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {attendees.slice((page - 1) * 10, page * 10).map((attendee) => {
            return (
              <TableRow key={attendee.id}>
                <TableCell>
                  <input
                    className="size-4 rounded border border-white/10 bg-black/20  "
                    type="checkbox"
                    name=""
                    id=""
                  />
                </TableCell>
                <TableCell>{attendee.id}</TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1 ">
                    <span className="font-semibold text-white">
                      {attendee.name}
                    </span>
                    <span>{attendee.email}</span>
                  </div>
                </TableCell>
                <TableCell>{dayjs().to(attendee.createdAt)}</TableCell>
                <TableCell>{dayjs().to(attendee.checkedInAt)}</TableCell>

                <TableCell>
                  <IconButton
                    transparent
                    className="rounded-md border border-white/10  bg-black/20 p-1.5"
                  >
                    <MoreHorizontal className="size-4" />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </tbody>
        <tfoot className="">
          <TableRow>
            <TableCell colSpan={3}>
              Mostrando {page * 10} de {attendees.length} itens
            </TableCell>

            <TableCell colSpan={3}>
              <div className=" flex items-center justify-end gap-8">
                <span>
                  Página {page} e {totalPages}
                </span>
                <div className="flex gap-1.5">
                  <IconButton onClick={goToFirstPage} disabled={isFirstPage}>
                    <ChevronsLeft className="size-4" />
                  </IconButton>
                  <IconButton onClick={goToPreviousPage} disabled={isFirstPage}>
                    <ChevronLeft className="size-4" />
                  </IconButton>
                  <IconButton
                    onClick={goToNextPage}
                    disabled={isLastPage}
                  >
                    <ChevronRight className="size-4" />
                  </IconButton>
                  <IconButton
                    onClick={goToLastPage}
                    disabled={isLastPage}
                  >
                    <ChevronsRight className="size-4" />
                  </IconButton>
                </div>
              </div>
            </TableCell>
          </TableRow>
        </tfoot>
      </Table>
    </div>
  );
}
