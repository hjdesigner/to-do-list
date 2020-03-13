import React, { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { Link } from 'react-router-dom';
import { Input } from 'components/Input';
import { Select } from 'components/Select';
import { TextArea } from 'components/TextArea';
import { Button } from 'components/Button';
import { HOME } from 'utils/routes'

const options = [
  {
    id: 0,
    value: 5,
    name: '5 minutos',
  },
  {
    id: 1,
    value: 10,
    name: '10 minutos',
  },
  {
    id: 2,
    value: 30,
    name: '30 minutos',
  },
];

const Form = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [remembeMe, setRemembeMe] = useState(5);
  const [tag, setTag] = useState('');
  const [tags, setTags] = useState([]);
  const [description, setDescription] = useState('');

  const handleDate = (value) => {
    if (value.length <= 10) {
      setDate(value.replace(/[^\d/]/g, ""));
    }
  }
  const handleTime = (value) => {
    if (value.length <= 5) {
      setTime(value.replace(/[^\d:]/g, ""));
    }
  }
  const handleAddTag = () => {
    setTags([
      ...tags,
      {
        id: uuidv4(),
        name: tag,
      }
    ]);
    setTag('');
  }
  const handleDeleteTag = (id) => {
    const newTags = tags.filter(item => item.id !== id);
    setTags(newTags);
  }
  const handleSave = () => {
    const data = {
      title,
      date,
      time,
      reminder: remembeMe,
      tags,
      description,
    }

    axios.post('http://5e6b9daed708a000160b4bbc.mockapi.io/api/v1/task', data)
      .then((response) => {
        setTitle('');
        setDate('');
        setTime('');
        setRemembeMe(5);
        setTags([]);
        setDescription('');
        toast.success('Tarefa criada com sucesso');
      })
      .catch((error) => {
        toast.error('Houve um erro, tente novamente');
      });
  }

  return (
    <Element>
      <Input name='titulo' title='Title' value={title} onChange={e => setTitle(e.target.value)} />
      <ElementMultiply>
        <DateOfTheEvent>
          <Input
            name='data'
            title='Data do evento'
            value={date}
            onChange={e => handleDate(e.target.value)}
            placeholder='20/12/2020'
          />
        </DateOfTheEvent>
        <TimeOfTheEvent>
          <Input
            name='hora'
            title='Hora do evento'
            value={time}
            onChange={e => handleTime(e.target.value)}
            placeholder='04:20'
          />
        </TimeOfTheEvent>
        <RememberMe>
          <Select
            name='lembre-me'
            title='Lembre-me'
            options={options}
            value={remembeMe}
            onChange={e => setRemembeMe(e.target.value)}
          />
        </RememberMe>
      </ElementMultiply>
      <Tags>
        <Input
          name='tag'
          title='Tag'
          value={tag}
          onChange={e => setTag(e.target.value)}
        />
        <AddTag onClick={handleAddTag}>Adicionar</AddTag>
      </Tags>
      <TagsValues>
        {tags.map((tag) => (
          <Tag key={tag.id}>
            {tag.name}
            <DeleteTag onClick={() => handleDeleteTag(tag.id)}>X</DeleteTag>
          </Tag>
        ))}
      </TagsValues>
      <TextArea
        name='descricao'
        title='Descrição'
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <Actions>
        <Add
          disabled={
            title === '' ||
            date === '' ||
            time === ''
          }
          onClick={() => handleSave()}
        >Salvar</Add>
        <Cancel to={HOME}>Cancelar</Cancel>
      </Actions>
      <ToastContainer />
    </Element>
  );
}

const Element = styled.div``;
const ElementMultiply = styled.div`
  margin-top: calc(${({ theme }) => theme.spaces}px * 2);
  margin-bottom: calc(${({ theme }) => theme.spaces}px * 2);
  display: flex;
  flex-wrap: wrap;
`;
const DateOfTheEvent = styled.div`
  margin-bottom calc(${({ theme }) => theme.spaces}px * 2);
  width: 100%;

  @media screen and (min-width: ${props => props.theme.media.tablet}) {
    max-width: 200px;
  }
`;
const TimeOfTheEvent = styled(DateOfTheEvent)`
  @media screen and (min-width: ${props => props.theme.media.tablet}) {
    margin-left: ${({ theme }) => theme.spaces}px;
  }
`;
const RememberMe = styled(DateOfTheEvent)`
  @media screen and (min-width: ${props => props.theme.media.tablet}) {
    margin-left: ${({ theme }) => theme.spaces}px;
  }
`;
const Actions = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  margin-top: calc(${({ theme }) => theme.spaces}px * 2);
`;
const Add = styled(Button)`
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-size: 1.4em;
  padding: ${({ theme }) => theme.spaces}px;
  width: auto;

  &[disabled] {
    cursor: default;
    opacity: .5;
  }
`;
const Cancel = styled(Link)`
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.4em;
  padding: ${({ theme }) => theme.spaces}px;
  margin-left: ${({ theme }) => theme.spaces}px;
  text-decoration: none;
`;
const Tags = styled.div`
  align-items: flex-end;
  display: flex;
`;
const AddTag = styled(Add)`
  height: 30px;
  padding: 0 ${({ theme }) => theme.spaces}px;
  margin-left: calc(${({ theme }) => theme.spaces}px * 2);
`;
const TagsValues = styled.div`
  display: flex;
  margin-bottom: calc(${({ theme }) => theme.spaces}px * 3);
`;
const Tag = styled.p`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray};
  display: flex;
  font-size: 1.3em;
  justify-content: center;
  padding: ${({ theme }) => theme.spaces}px;
  margin-top: calc(${({ theme }) => theme.spaces}px * 2);
  margin-right: calc(${({ theme }) => theme.spaces}px * 2);
  margin-bottom: 0;
`;
const DeleteTag = styled(Button)`
  margin-left: ${({ theme }) => theme.spaces}px;
`;

export default Form;