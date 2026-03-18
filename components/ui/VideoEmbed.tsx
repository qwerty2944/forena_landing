interface VideoEmbedProps {
  videoId: string;
  title?: string;
}

export default function VideoEmbed({
  videoId,
  title = '동영상',
}: VideoEmbedProps) {
  return (
    <div className="relative w-full overflow-hidden" style={{ paddingBottom: '56.25%' }}>
      <iframe
        src={`https://player.vimeo.com/video/${videoId}?dnt=1`}
        title={title}
        className="absolute top-0 left-0 w-full h-full"
        allow="autoplay; fullscreen; picture-in-picture"
        referrerPolicy="no-referrer"
        loading="lazy"
        sandbox="allow-scripts allow-same-origin allow-popups"
        style={{ border: 0 }}
      />
    </div>
  );
}
