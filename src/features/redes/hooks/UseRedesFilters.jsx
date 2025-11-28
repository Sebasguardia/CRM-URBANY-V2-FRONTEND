import { useMemo, useState } from "react";

export const useRedesFilters = (dataInicial) => {
  const [search, setSearch] = useState("");
  const [incluirPropias, setIncluirPropias] = useState(true);

  const dataFiltrada = useMemo(() => {
    return dataInicial.filter((item) => {
      const matchesSearch =
        item.direccion.toLowerCase().includes(search.toLowerCase()) ||
        item.codigo.toLowerCase().includes(search.toLowerCase());

      const matchesPropias = incluirPropias ? true : !item.esPropia;

      return matchesSearch && matchesPropias;
    });
  }, [dataInicial, search, incluirPropias]);

  return {
    dataFiltrada,
    search,
    setSearch,
    incluirPropias,
    setIncluirPropias,
  };
};