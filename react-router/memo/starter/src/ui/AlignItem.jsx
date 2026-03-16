import { Divider, ListItem, ListItemText } from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import toast from 'react-hot-toast';

export default function AlignItem({ item, handleDelete }) {
  const processedBody = truncateText(item.body);
  function truncateText(text) {
    const maxLength = 20;
    if (!text) return '';
    if (text.length <= maxLength) return text;
    // 截取到最大长度
    const truncated = text.slice(0, maxLength);
    // 最后一个空格位置（避免切断英文单词）
    const lastSpace = truncated.lastIndexOf(' ');
    // 如果有空格，就截断到单词结尾
    if (lastSpace > 0) {
      return truncated.slice(0, lastSpace) + '...';
    }
    // 没有空格（中文/长串字符），直接截断
    return truncated + '...';
  }

  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={item.title}
          secondary={<React.Fragment>{processedBody}</React.Fragment>}
        />
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => {
            handleDelete(item.id);
            toast.success('delete complete!');
          }}
        >
          <DeleteIcon />
        </IconButton>
      </ListItem>
      <Divider variant="fullWidth" component="li" />
    </>
  );
}
