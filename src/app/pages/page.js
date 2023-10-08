import '../newstyles.css';
import Link from 'next/link';

export default function Hello() {
  return (
    <div>
      <h1 className="h1_ola">Oláa!!!</h1>
      <Link href="/">
        <button>Return Home :)</button>
      </Link>
    </div>
  );
}
