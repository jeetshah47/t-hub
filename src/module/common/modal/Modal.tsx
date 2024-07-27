type ModalProps = {
  children: React.ReactNode;
  title: string;
};

const Modal = ({ title, children }: ModalProps) => {
  return (
    <div className="fixed top-0 left-0 z-10 w-full h-screen flex items-center justify-center bg-opacity-85 bg-slate-200">
      <div className="bg-white rounded-lg p-5 w-2/6">
        <div className="py-4 px-2 border-b-2">
          <p>{title}</p>
        </div>
        <div className="px-2 py-2 w-full">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
