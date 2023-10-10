import { ChangeEvent, FormEvent } from "react";
import {
  useGetCommentQuery,
  usePostCommentMutation,
} from "../redux/features/products/productApi";

import { useState } from "react";

interface IProps {
  id: string;
}

export default function BookReview({ id }: IProps) {
  const [inputValue, setInputValue] = useState<string>("");
  const { data } = useGetCommentQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });
  const [postComment, { isLoading, isError, isSuccess }] =
    usePostCommentMutation();
  console.log(isLoading);
  console.log(isError);
  console.log(isSuccess);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const option = {
      id: id,
      data: { comment: inputValue },
    };
    postComment(option);
    setInputValue("");
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="max-w-7xl mx-auto mt-5">
      <form className="flex gap-5 items-center" onSubmit={handleSubmit}>
        <textarea
          className="min-h-[50px] w-full border border-sky-500"
          onChange={handleChange}
          value={inputValue}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      <div className="mt-10">
        {data?.comments?.map((comment: string, index: number) => (
          <div key={index} className="flex gap-3 items-center mb-5">
            {/* <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar> */}
            <p>{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
