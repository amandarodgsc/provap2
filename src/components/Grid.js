import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const Table = styled.table`
  max-width: 800px;
  width: 100%;
  font-family: 'Poppins', sans-serif;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  margin: 20px auto;
  word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;
  width: 20%; /* Largura das colunas */
  font-size: 16px; /* Tamanho do texto */
`;

export const Td = styled.td`
  padding: 10px;
  text-align: start;
  vertical-align: top;
  width: 20%; /* Largura das colunas */
  font-size: 16px; /* Tamanho do texto */
  /* Evita que o texto quebre em várias linhas */
  overflow: hidden; /* Esconde o texto que excede a largura da célula */
  max-width: 200px; /* Largura máxima da célula para dispositivos móveis */
  text-overflow: ellipsis; /* Exibe reticências (...) para o texto que não cabe na célula */
  cursor: pointer;
  &:hover {
    white-space: normal; /* Exibe o texto completo ao passar o mouse */
    overflow: visible;
    max-width: none;
  }
`;

const Grid = ({ users, setUsers, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete("http://localhost:8800/" + id);
      const newArray = users.filter((user) => user.id !== id);
      setUsers(newArray);
      toast.success(response.data);
    } catch (error) {
      toast.error(error.response.data);
    }
    setOnEdit(null);
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>Email</Th>
          <Th>Fone</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((item, i) => (
          <Tr key={i}>
            <Td>{item.nome}</Td>
            <Td>{item.email}</Td>
            <Td>{item.fone}</Td>
            <Td alignCenter>
              <FaEdit onClick={() => handleEdit(item)} />
            </Td>
            <Td alignCenter>
              <FaTrash onClick={() => handleDelete(item.id)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid;
