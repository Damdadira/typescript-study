type Video = {
  id: string;
  title: string;
  url: string;
  data: string;
}
type VideoMetadata = Pick<Video, "id" | "title">;

// 전부 리턴
function getVideo(id: string): Video {
  return {
    id,
    title: "video",
    url: "https://...",
    data: "byte-data...",
  }
}
// 원하는 것만 리턴
function getVideoMetadata(id: string): VideoMetadata {
  return {
    id,
    title: "title",
  }
}