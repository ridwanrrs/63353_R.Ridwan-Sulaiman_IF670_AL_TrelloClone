import React, { createContext, useState } from 'react';


export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [boards, setBoards] = useState([
    {
      id: '1',
      title: 'Project UI/UX',
      cards: [
        { id: '1', title: 'Design Login Page', description: 'Create login UI' },
        { id: '2', title: 'Dashboard Layout', description: 'Implement main board screen' },
      ],
    },
    {
      id: '2',
      title: 'Personal Goals',
      cards: [
        { id: '1', title: 'Read Book', description: 'Finish UI/UX book' },
      ],
    },
  ]);

  const deleteCard = (boardId, cardId) => {
    const updatedBoards = boards.map(board => {
      if (board.id === boardId) {
        return {
          ...board,
          cards: board.cards.filter(card => card.id !== cardId),
        };
      }
      return board;
    });
    setBoards(updatedBoards);
  };

  return (
    <AppContext.Provider value={{ user, setUser, boards, setBoards, deleteCard }}>
      {children}
    </AppContext.Provider>
  );
};