import React, { Fragment } from 'react';
import { object } from 'prop-types';
import styled from 'styled-components';

const ViewTask = ({ item }) => {
  
  return (
    <Fragment>
      <TitleTask>{item.title}</TitleTask>
      <InfoContent>
        <Date><box-icon name='calendar' /> {item.date}</Date>
        <Time><box-icon name='time' /> {item.time}</Time>
        <RememberMe><box-icon name='timer' /> Lembre-me {item.reminder} minutos antes</RememberMe>
        <Created><box-icon name='box' /> Criado em {item.create}</Created>
      </InfoContent>
      <TagsValues>
        {item.tags.map((tag) => (
          <Tag key={tag.id}>
            {tag.name}
          </Tag>
        ))}
      </TagsValues>
      <Description>{item.description}</Description>
    </Fragment>
  )
}

const TitleTask = styled.h4`
  font-size: 1.7em;
  font-weight: normal;
`;
const InfoContent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Date = styled.p`
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  font-size: 1.4em;
  margin: 0 0 ${({ theme }) => theme.spaces}px;
  width: 100%;

  box-icon {
    margin-right: ${({ theme }) => theme.spaces}px;
    width: 18px;
  }

  @media screen and (min-width: ${props => props.theme.media.tablet}) {
    width: auto;
  }
`;
const Time = styled(Date)`  

  @media screen and (min-width: ${props => props.theme.media.tablet}) {
    margin-left: ${({ theme }) => theme.spaces}px;
  }
`;
const RememberMe = styled(Date)`

  @media screen and (min-width: ${props => props.theme.media.tablet}) {
    margin-left: ${({ theme }) => theme.spaces}px;
  }
`;
const Created = styled(Date)`

  @media screen and (min-width: ${props => props.theme.media.tablet}) {
    margin-left: ${({ theme }) => theme.spaces}px;
  }
`;
const Description = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.4em;
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

ViewTask.propTypes = {
  item: object.isRequired,
};

export default ViewTask;