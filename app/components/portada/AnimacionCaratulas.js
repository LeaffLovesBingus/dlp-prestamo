"use client";
import { Box, Image } from "@chakra-ui/react";
import { keyframes } from "@emotion/react"; // Importación corregida

const horizontalScroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

const reverseScroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(100%); }
`;

const ScrollRow = ({ books, direction }) => {
  const animation = direction === "left" ? horizontalScroll : reverseScroll;

  return (
    <Box
      overflow="hidden"
      whiteSpace="nowrap"
      display="flex"
      alignItems="center"
      animation={`${animation} 20s linear infinite`} // Aplicar animación
    >
      {books.map((book, index) => (
        <Image
          key={index}
          src={book}
          alt={`book-${index}`}
          boxSize="120px"
          borderRadius="10px"
          mx="10px"
        />
      ))}
      {/* Repetimos la fila para crear el efecto de loop */}
      {books.map((book, index) => (
        <Image
          key={`copy-${index}`}
          src={book}
          alt={`book-copy-${index}`}
          boxSize="120px"
          borderRadius="10px"
          mx="10px"
        />
      ))}
    </Box>
  );
};

const Caratulas = () => {
  const books = [
    // URLs de las carátulas de los libros
    "https://via.placeholder.com/120x180.png?text=Book+1",
    "https://via.placeholder.com/120x180.png?text=Book+2",
    "https://via.placeholder.com/120x180.png?text=Book+3",
    "https://via.placeholder.com/120x180.png?text=Book+4",
    "https://via.placeholder.com/120x180.png?text=Book+5",
    "https://via.placeholder.com/120x180.png?text=Book+6",
    "https://via.placeholder.com/120x180.png?text=Book+7",
    "https://via.placeholder.com/120x180.png?text=Book+8",
  ];

  return (
    <Box bg="#2a2b3f" p="20px">
      <Box overflow="hidden">
        <ScrollRow books={books} direction="left" />
      </Box>
      <Box overflow="hidden" mt="20px">
        <ScrollRow books={books} direction="right" />
      </Box>
      <Box overflow="hidden" mt="20px">
        <ScrollRow books={books} direction="left" />
      </Box>
    </Box>
  );
};

export default Caratulas;
