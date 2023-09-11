import Die from "./Die";

export default function DiceTable(props) {
  const dice = props.dice;
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <Die self={dice.white[0]} />
          </td>
          <td>
            <Die self={dice.white[1]} />
          </td>
          <td>
            <Die self={dice.white[2]} />
          </td>
        </tr>
        <tr>
          <td>
            <Die self={dice.black[0]} />
          </td>
          <td>
            <Die self={dice.black[1]} />
          </td>
          <td>
            <Die self={dice.black[2]} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
