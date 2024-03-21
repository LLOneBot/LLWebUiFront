import {Box, Breadcrumbs, Button, Divider, Link, Paper, Typography} from "@mui/material";
import {useState} from "react";
import {useImmer} from "use-immer";
import {
  ArticleOutlined,
  CloudUpload, DataObject,
  Delete,
  DriveFileRenameOutline,
  Edit,
  FolderOutlined
} from "@mui/icons-material";
import {DataGrid} from "@mui/x-data-grid";

interface Stats<T = number> {
  dev: T;
  ino: T;
  mode: T;
  nlink: T;
  uid: T;
  gid: T;
  rdev: T;
  size: T;
  blksize: T;
  blocks: T;
  atimeMs: T;
  mtimeMs: T;
  ctimeMs: T;
  birthtimeMs: T;
  atime: string;
  mtime: string;
  ctime: string;
  birthtime: string;
}

interface File {
  filename: string,
  filetype: 0 /* FILE */ | 1 /* PATH */,
}

export const File = () => {
  const [currentPath, setCurrentPath] = useState<string[]>([])
  const [files, setFiles] = useImmer<(
    File & Stats & {selected?: boolean}
  )[]>([])

  // useEffect here, fetch => setFiles, dependency = currentPath

  return <Box display={"flex"} flexDirection={"column"} alignItems={"stretch"} gap={2}>
    <Box textAlign={"center"}><Typography variant={"h5"}>文件管理</Typography></Box>
    <Breadcrumbs>
      {currentPath.length === 0 ?
          <Typography><b>根目录</b></Typography> :
          <Link onClick={() => setCurrentPath([])}>根目录</Link>}
      {currentPath.map((value, index, array) =>
        index !== array.length - 1 ?
          <Link onClick={() => setCurrentPath(prevState => prevState.slice(0, index + 1))}>
            {value}
          </Link> :
          <Typography>
            <b>{value}</b>
          </Typography>
      )}
    </Breadcrumbs>
    <Paper>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box display={"flex"} gap={2} padding={1}>
          <Button startIcon={<CloudUpload/>} variant={"contained"} color={"success"}>上传</Button>
        </Box>
        <Box display={"flex"} gap={2} padding={1}>
          <Button startIcon={<Edit/>}>编辑</Button>
          <Button startIcon={<DriveFileRenameOutline/>}>重命名</Button>
          <Button startIcon={<Delete/>} color={"error"}>删除</Button>
        </Box>
      </Box>
      <Divider/>
      <DataGrid
        columns={[
          {
            field: "filename",
            headerName: "文件名",
            type: "string",
            renderCell: ({row: {filetype, filename}}) => <Box display={"flex"} gap={1} alignItems={"center"}>
              {filetype === 0 ?
                  (
                      filename.endsWith(".json")
                      || filename.endsWith("js")
                  ) ? <DataObject/> : <ArticleOutlined/>
                  : <FolderOutlined/>}
              <Link>{filename}</Link>
            </Box>,
            flex: 4,
          },
          {
            field: "size",
            headerName: "文件大小",
            type: "number",
            renderCell: ({row: {size}}) =>
                size <= 1024 ? `${size} B` :
                    size <= 1024 * 1024 ? `${Math.round(size / 1024)} KB` :
                        size <= 1024 * 1024 * 1024 ? `${Math.round((size / 1024) / 1024)} MB` :
                            `${Math.round(((size / 1024) / 1024) / 1024)}`,
            flex: 0.5
          },
          {
            field: "mtime",
            headerName: "修改时间",
            type: "dateTime",
            flex: 1,
            valueGetter: params => new Date(params.row.mtime)
          }
        ]}
        rows={files.map(entry => ({
          ...entry,
          id: `${entry.filetype}|${entry.filename}`
        }))}
        disableColumnSelector
      />
    </Paper>
  </Box>
}