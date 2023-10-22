type Props = {
  initials: string;
};

function Avatar(props: Props) {
  return (
    <div className="w-8 h-8 rounded-full bg-primary flex justify-center items-center">
      <p className="font-medium text-xl text-secondary">{props?.initials}</p>
    </div>
  );
}

export default Avatar;
