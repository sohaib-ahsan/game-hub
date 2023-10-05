import useGenres from "../../hooks/useGenres";

const GenreList = () => {
  const { genres } = useGenres();
  return (
    <ul>
      {genres.map((el) => (
        <li key={el.id}>{el.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;