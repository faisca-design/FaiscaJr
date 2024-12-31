import Image from 'next/image';

function Item({ link, icon, altText }) {
    return (
        <li>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image src={icon} alt={altText} width={24} height={24} />
            </a>
        </li>
    );
}

export default Item;