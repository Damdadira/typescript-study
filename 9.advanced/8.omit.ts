{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  }
  // Video에 없는 것도 가능
  type VideoMetadata = Omit<Video, "url" | "data" | "h">;

  // 전부 리턴
  function getVideo(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://...",
      data: "byte-data...",
    }
  }
  // 원하는 것만 빼고 리턴
  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id,
      title: "title",
    }
  }
}