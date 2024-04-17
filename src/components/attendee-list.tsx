import {
  Search,
  MoreHorizontal,
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
} from "lucide-react";

export default function AttendeeList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3 ">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="flex w-72 items-center gap-3 rounded-lg border border-white/10  bg-transparent px-3 py-1.5 text-sm ">
          <Search className="size-4 text-emerald-300" />
          <input
            className="flex-1 border-0 bg-transparent p-0 text-sm outline-none ring-0 "
            placeholder="Buscar participantes..."
          />
        </div>
      </div>
      <div className="w-full rounded-lg border  border-white/10 ">
        <table className="w-full  ">
          <thead>
            <tr className="border-b border-white/10">
              <th
                style={{
                  width: 48,
                }}
                className="px-4 py-3  text-left text-sm font-semibold "
              >
                <input
                  className="size-4 rounded border border-white/10 bg-black/20  "
                  type="checkbox"
                  name=""
                  id=""
                />
              </th>
              <th className="px-4 py-3  text-left text-sm font-semibold ">
                Código
              </th>
              <th className="px-4 py-3  text-left text-sm font-semibold ">
                Participante
              </th>
              <th className="px-4 py-3  text-left text-sm font-semibold ">
                Data de inscrição
              </th>
              <th className="px-4 py-3  text-left text-sm font-semibold ">
                Data do check-in
              </th>
              <th
                style={{
                  width: 64,
                }}
                className="px-4 py-3  text-left text-sm font-semibold "
              ></th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 4 }).map((_, i) => {
              return (
                <tr
                  key={i}
                  className="border-b border-white/10  hover:bg-white/5 "
                >
                  <td className="px-4 py-3  text-sm text-zinc-300">
                    <input
                      className="size-4 rounded border border-white/10 bg-black/20  "
                      type="checkbox"
                      name=""
                      id=""
                    />
                  </td>
                  <td className="px-4 py-3  text-sm text-zinc-300">1651</td>
                  <td className="px-4 py-3  text-sm text-zinc-300">
                    <div className="flex flex-col gap-1 ">
                      <span className="font-semibold text-white">
                        felipe lacerda
                      </span>
                      <span>felipe@hotmail.com</span>
                    </div>
                  </td>
                  <td className="px-4 py-3  text-sm text-zinc-300">
                    7 dias atrás
                  </td>
                  <td className="px-4 py-3  text-sm text-zinc-300">
                    3 dias atrás
                  </td>
                  <td className="px-4 py-3  text-sm text-zinc-300">
                    <button className="rounded-md border border-white/10  bg-black/20 p-1.5">
                      <MoreHorizontal className="size-4" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot className="">
            <tr>
              <td className="px-4 py-3  text-sm text-zinc-300" colSpan={3}>
                Mostrando 10 de 100 itens
              </td>

              <td
                className="px-4 py-3 text-right  text-sm text-zinc-300"
                colSpan={3}
              >
                <div className=" inline-flex items-center gap-8">
                  <span> Página 1 e 23</span>
                  <div className="flex gap-1.5">
                    <button className="rounded-md border border-white/10  bg-white/10 p-1.5">
                      <ChevronsLeft className="size-4" />
                    </button>
                    <button className="rounded-md border border-white/10  bg-white/10 p-1.5">
                      <ChevronLeft className="size-4" />
                    </button>
                    <button className="rounded-md border border-white/10  bg-white/10 p-1.5">
                      <ChevronRight className="size-4" />
                    </button>
                    <button className="rounded-md border border-white/10  bg-white/10 p-1.5">
                      <ChevronsRight className="size-4" />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
