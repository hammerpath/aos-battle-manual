export interface HeaderProps {
  commandPoints: number;
}

const Header: React.FC<HeaderProps> = function ({ commandPoints }) {
  return <div>Command points: {commandPoints}</div>;
};

export default Header;
