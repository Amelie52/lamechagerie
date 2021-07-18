import React from "react";
import dayjs from "dayjs";

import "dayjs/locale/fr";

dayjs.locale("fr");

type Props = {
  date: Date;
};

const Date = ({ date }: Props) => {
  return (
    <time dateTime={dayjs(date).format()}>
      {dayjs(date).locale("fr").format("DD MMMM YYYY, HH:mm")}
    </time>
  );
};

export default Date;
