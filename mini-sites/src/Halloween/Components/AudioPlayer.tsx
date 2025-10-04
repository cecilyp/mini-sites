const AudioPlayer: React.FC = () => (
    <audio id="background-music" loop autoPlay muted>
        <source src="skeletons.mp3" type="audio/mpeg" />
    </audio>
);
export default AudioPlayer;
