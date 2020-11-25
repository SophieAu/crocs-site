/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useReducer } from 'react';

import { strings } from '../../../data/strings';
import { ReservationData, TicketCategory } from '../../types';
import * as styles from './TicketMgmt.styles';

const reducerFn = ({ tickets, total }: ReservationData, { name, amount }: TicketCategory) => {
  const numAmount = parseInt(amount, 10);
  if (isNaN(numAmount)) return { tickets, total };

  const updateIndex = tickets.findIndex(i => i.name === name);
  if (updateIndex === -1) return { tickets, total };

  tickets[updateIndex] = { ...tickets[updateIndex], amount };
  const newTotal = tickets.reduce((total, t) => total + parseInt(t.amount, 10) * t.cost, 0);
  return { tickets, total: newTotal };
};

const initialState = (categories: TicketCategory[]) => ({
  tickets: categories.map(c => ({ name: c.name, amount: '0', cost: Number(c.amount) })),
  total: 0,
});

interface Props {
  categories: TicketCategory[];
  onTicketChange: (c: TicketCategory) => void;
}

const TicketMgmt: React.FC<Props> = ({ categories, onTicketChange }) => {
  const [reservationsData, updateReservation] = useReducer(reducerFn, initialState(categories));

  const handleNumberInputChange = (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const amount = e.target.value;

    onTicketChange({ name, amount });
    updateReservation({ name, amount });
  };

  return (
    <div className={styles.inputSection}>
      <table>
        <tbody>
          {reservationsData.tickets.map((t, i) => (
            <tr key={t.name} className={styles.ticketCateogry}>
              <td>
                <label aria-label={`${t.name} ${strings.signUp.amount(t.cost)}`} htmlFor={`t-${i}`}>
                  {t.name}
                </label>
              </td>
              <td>
                <input
                  id={`t-${i}`}
                  max={99}
                  min={0}
                  name={t.name}
                  placeholder="0"
                  type="number"
                  value={t.amount}
                  onChange={handleNumberInputChange(t.name)}
                />
              </td>
              <td>{strings.signUp.amount(t.cost)}</td>
            </tr>
          ))}
          <tr className={styles.totals}>
            <td></td>
            <td>{strings.signUp.total}</td>
            <td>{strings.signUp.amount(reservationsData.total)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TicketMgmt;
