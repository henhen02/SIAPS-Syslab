import React from "react";
import * as AiIcon from "react-icons/ai";

export const StatusTaskProgress = () => {
  return (
    <div className="status-task progress">
      <AiIcon.AiOutlineClockCircle color="red" />
      Diproses
    </div>
  );
};

export const StatusTaskDone = () => {
  return (
    <div className="status-task done">
      <AiIcon.AiOutlineCheckCircle color="green" />
      Selesai
    </div>
  );
};

export const StatusTaskLate = () => {
  return (
    <div className="status-task late">
      <AiIcon.AiOutlineWarning color="#c9723e" />
      Terlambat
    </div>
  );
};
