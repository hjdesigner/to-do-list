import React from 'react';
import styled from 'styled-components';
import { Select } from 'components/Select';
import { useTasks } from 'hooks';

const options = [
  {
    id: 0,
    value: '',
    name: 'Todos',
  },
  {
    id: 1,
    value: false,
    name: 'Em andamento',
  },
  {
    id: 2,
    value: true,
    name: 'Finalizados',
  },
];

const FilterFinished = () => {
  const {
    filter,
    filterSet,
  } = useTasks();

  return (
    <Filter>
      <Select
        name='filtro'
        title='Filtre por'
        options={options}
        value={filter}
        onChange={e => filterSet(e.target.value)}
      />
    </Filter>
  );
}

const Filter = styled.div`
  margin-bottom: calc(${({ theme }) => theme.spaces}px * 4);
  width: 100%;
  
  @media screen and (min-width: ${props => props.theme.media.tablet}) {
    margin-bottom: 0;
    width: 200px;
  }
`;

export default FilterFinished;