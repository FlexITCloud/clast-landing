import markdownStyles from '@/container/markdown-styles.module.css';

type Props = {
  content: string;
};

export default function PostBody({ content }: Props) {
  return (
    <div className="mx-auto max-w-2xl">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
