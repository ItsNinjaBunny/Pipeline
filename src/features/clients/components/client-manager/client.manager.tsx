import { ChangeEvent, useState } from 'react';
import { Card } from '../../types';
import { ClientCard } from '../client-card/client.card';

type Props = {
  className: string;
  data: Card[];
  selected: boolean;
  setSelected: CallableFunction;
}

export const ClientManager = ({ className, data, selected, setSelected }: Props) => {
  const [cardSelected, setCardSelected] = useState<Card | null>(null);
  const [hide, setHide] = useState('hide--clients');
  const show = 'show--clients';

  const handleSelected = (card: Card, e: React.MouseEvent<HTMLDivElement>) => {
    setCardSelected({ ...card });
    setSelected((prev: boolean) => !prev);
    e.currentTarget.className += ' selected--client';
    console.log(e.currentTarget.className);

  }

  return (
    <section className='relative h-full flex flex-col space-y-4 py-2'>
      {
        data.map(card => (
          <ClientCard onClick={(e: React.MouseEvent<HTMLDivElement>) => handleSelected(card, e)}
            className={`${selected &&
              JSON.stringify(cardSelected) !== JSON.stringify(card) ? hide : show}`}
            key={card.id} card={card} />
        ))
      }
    </section>
  )
}