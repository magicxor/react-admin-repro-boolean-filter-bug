import * as React from 'react';
import { BooleanField, BooleanInput, Datagrid, List, TextField } from 'react-admin';

const gridFilters = [
  <BooleanInput label="Is supported" source="isSupported" />,
];

export const CountryList = () => {
  return (
    <List
      filters={gridFilters}
      sort={{ field: "name", order: 'ASC' }}
    >
      <Datagrid bulkActionButtons={false}>
        <BooleanField label="Is supported" source="isSupported" />,
        <TextField label="Name" source="name" />
        <TextField label="Short name" source="shortName" />
      </Datagrid>
    </List>
  );
};
