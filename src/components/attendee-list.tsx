import {
  Search,
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
import { useEffect, useState } from "react";

import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
dayjs.locale("pt-br");

type attendee = {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
  checkedInAt: Date | null;
};

export default function AttendeeList() {
  const [search, setSearch] = useState(() => {
    const url = new URL(window.location.toString());

    if (url.searchParams.has("search")) {
      return url.searchParams.get("search") ?? "";
    }

    return "";
  });

  const [page, setPage] = useState(() => {
    const url = new URL(window.location.toString());
    if (url.searchParams.has("page")) {
      return Number(url.searchParams.get("page"));
    }

    return 1;
  });
  const [attendees, setAttendees] = useState<attendee[]>([]);
  const [total, setTotal] = useState(0);

  const totalPages = Math.ceil(total / 10);
  const isFirstPage = page <= 1;
  const isLastPage = page >= totalPages;

  useEffect(() => {
    const url = new URL(
      `${import.meta.env.VITE_API}/events/9e9bd979-9d10-4915-b339-3786b1634f33/attendees`,
    );
    url.searchParams.set("pageIndex", String(page - 1));
    if (search.length > 0) url.searchParams.set("query", search);

    fetch(url).then((r) =>
      r.json().then((data) => {
        setTotal(data.total);

        setAttendees(data.attendees);
      }),
    );
  }, [page, search]);

  const setCurrentSearch = (search: string) => {
    const url = new URL(window.location.toString());

    url.searchParams.set("search", search);

    window.history.pushState({}, "", url);
    setSearch(search);
  };

  const setCurrentPage = (page: number) => {
    const url = new URL(window.location.toString());

    url.searchParams.set("page", String(page));

    window.history.pushState({}, "", url);
    setPage(page);
  };

  const goToFirstPage = () => {
    if (isFirstPage) return;

    setCurrentPage(1);
  };
  const goToPreviousPage = () => {
    if (isFirstPage) return;

    setCurrentPage(page - 1);
  };

  const goToNextPage = () => {
    setCurrentPage(page + 1);
  };

  const goToLastPage = () => {
    setCurrentPage(totalPages);
  };

  const onSearchInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentSearch(e.target.value);
    setPage(1);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3 ">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="flex w-72 items-center gap-3 rounded-lg border border-white/10  bg-transparent px-3 py-1.5 text-sm ">
          <Search className="size-4 text-emerald-300" />
          <input
            value={search}
            onChange={onSearchInputChanged}
            className="flex-1 border-0 bg-transparent p-0 text-sm outline-none ring-0 focus:ring-0 "
            placeholder="Buscar participantes..."
          />
        </div>
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
                disabled
                className="size-4  rounded border border-white/5 bg-black/20 "
                type="checkbox"
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
          {attendees.map((attendee) => {
            return (
              <TableRow key={attendee.id}>
                <TableCell>
                  <input
                    className="size-4 cursor-pointer  rounded border border-white/10 bg-black/20  "
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
                <TableCell>
                  {attendee.checkedInAt ? (
                    dayjs().to(attendee.checkedInAt)
                  ) : (
                    <span className="text-zinc-400">Não fez check-in</span>
                  )}
                </TableCell>

                <TableCell>
                  {/*  <IconButton
                    transparent
                    className="rounded-md border border-white/10  bg-black/20 p-1.5"
                  >
                    <MoreHorizontal className="size-4" />
                  </IconButton> */}
                </TableCell>
              </TableRow>
            );
          })}
        </tbody>
        <tfoot className="">
          <TableRow>
            <TableCell colSpan={3}>
              Mostrando {attendees.length} de {total} itens
            </TableCell>

            <TableCell colSpan={3}>
              <div className=" flex items-center justify-end gap-8">
                <span>
                  Página {page} e {totalPages}
                </span>
                <div className="flex gap-1.5">
                  <IconButton
                    title="Primeira pagina"
                    onClick={goToFirstPage}
                    disabled={isFirstPage}
                  >
                    <ChevronsLeft className="size-4" />
                  </IconButton>
                  <IconButton
                    title="Pagina anterior"
                    onClick={goToPreviousPage}
                    disabled={isFirstPage}
                  >
                    <ChevronLeft className="size-4" />
                  </IconButton>
                  <IconButton
                    title="Proxima pagina"
                    onClick={goToNextPage}
                    disabled={isLastPage}
                  >
                    <ChevronRight className="size-4" />
                  </IconButton>
                  <IconButton
                    title="Ultima pagina"
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
