import React from "react";
import { useParams } from "react-router-dom";
import useDetailJadwal from "../../hooks/useDetailJadwal";

function DetailJadwal() {
  const { id } = useParams();
  const { data, isLoading, error } = useDetailJadwal(id);

  return <div>DetailJadwal</div>;
}

export default DetailJadwal;
