// see: https://symfony.com/bundles/ux-react/current/index.html#usage

import React from "react";

export default function ({ values }) {
  return (
    <div>
      {values.map((value) => (
        <ul key={value.id}>
          <li>Task: {value.title}</li>
          <li>Status: {value.completed ? "completed" : "incomplete"}</li>
        </ul>
      ))}
    </div>
  );
}
