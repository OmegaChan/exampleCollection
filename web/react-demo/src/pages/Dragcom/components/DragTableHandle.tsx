import React from "react";
import type { DragEndEvent } from '@dnd-kit/core';
import { DndContext } from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { Table } from 'antd';
import RowHandle from './RowHandle';
import { useData } from '../hooks/useData';
import { useColumns } from '../hooks/useColumns';

const DragTableHandle = () => {
  const { data, setData } = useData();
  const { columnsHandle } = useColumns();


  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      setData((previous) => {
        const activeIndex = previous.findIndex((i) => i.key === active.id);
        const overIndex = previous.findIndex((i) => i.key === over?.id);
        return arrayMove(previous, activeIndex, overIndex);
      });
    }
  };

  return (
    <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={onDragEnd}>
      <SortableContext
        // rowKey array
        items={data.map((i) => i.key)}
        strategy={verticalListSortingStrategy}
      >
        <Table
          components={{
            body: {
              row: RowHandle,
            },
          }}
          rowKey="key"
          columns={columnsHandle}
          dataSource={data}
        />
      </SortableContext>
    </DndContext>
  );
};

export default DragTableHandle;