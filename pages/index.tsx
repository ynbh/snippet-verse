// React
import { useState } from "react";

// Next
import Head from "next/head";
import { GetServerSideProps } from "next";

// Fonts
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

// Components & Utils
import { Editor, SEO, Article, Share } from "../components";
import { encode, decode } from "../utils/parse";
import { recordPaste } from "../utils/log";

export default function Home({
	decoded,
	isHome,
}: { decoded: string; isHome: boolean }) {
	let code = `use std::{collections::HashMap, fs::File, io::Read};

  fn get_input() -> String {
      let mut file = File::open("inputs/2022/2/1.txt").expect("File not found");
  
      let mut data = String::new();
  
      file.read_to_string(&mut data)
          .expect("Error while reading file into string.");
  
      return data;
  }
  
  #[derive(Debug)]
  struct Rolls {
      elf_roll: String,
      user_roll: String,
  }
  
  fn parse(contents: &str) -> Vec<Rolls> {
      let mut rolls: Vec<Rolls> = vec![];
      let map: HashMap<&str, &str> = vec![
          ("A", "Rock"),
          ("B", "Paper"),
          ("C", "Scissors"),
          ("X", "Rock"),
          ("Y", "Paper"),
          ("Z", "Scissors"),
      ]
      .into_iter()
      .collect();
  
      for value in contents.split("\n") {
          let draws = value.split(" ").collect::<Vec<&str>>();
  
          rolls.push(Rolls {
              elf_roll: map.get(&draws[0]).unwrap().to_string(),
              user_roll: map.get(&draws[1]).unwrap().to_string(),
          })
      }
      return rolls;
  }
  
  fn user_win(elf_roll: String, user_roll: String) -> Vec<&'static i32> {
      let win_map: HashMap<&str, &str> = vec![
          ("Rock", "Scissors"),
          ("Scissors", "Paper"),
          ("Paper", "Rock"),
      ]
      .into_iter()
      .collect();
  
      let points: HashMap<&str, i32> = vec![("Rock", 1), ("Paper", 2), ("Scissors", 3)]
          .into_iter()
          .collect();
  
      if elf_roll == user_roll {
          return vec![points.get(elf_roll.as_str()).unwrap(), &3];
      }
      let cloned = points.clone();
      return vec![
          points.get(user_roll.as_str()).unwrap(),
          if win_map.get(elf_roll.as_str()).unwrap() == &user_roll.as_str() {
              &1
          } else {
              &0
          },
      ]
  }
  fn get_inverse(chance: &str, outcome: &str) {
      let win_map: HashMap<&str, &str> = vec![
          ("Rock", "Scissors"),
          ("Scissors", "Paper"),
          ("Paper", "Rock"),
      ]
      .into_iter()
      .collect();
  
      let loss_map: HashMap<&str, &str> = vec![
          ("Rock", "Paper"),
          ("Scissors", "Rock"),
          ("Paper", "Scissors"),
      ]
      .into_iter()
      .collect();
  
      return if outcome == "win" {
          win_map.get(chance).unwrap();
      } else {
          loss_map.get(chance).unwrap();
      };
  }
  
  fn main() {
      let input = get_input();
      let parsed = parse(input.as_str());
  
      println!("{:#?}", parsed)
  }
  `;

	const [encoded, setEncoded] = useState(encode(code));

	return (
		<div>
			<SEO />

			<main className={inter.className}>
				{isHome === false ? (
					<div>
						<Share
							custom={true}
							classNames="text-sm font-sans font-bold p-1 m-2 rounded-md border  bg-gradient-to-r from-rose-100 to-teal-100"
							share={encoded}
						/>
						<div className="code-box mt-1">
							<Editor
								code={decoded || code}
								cb={(v: string, l) => {
									setEncoded(v);
									setEncoded((v) => {
										console.log(v);
										return encode(v);
									});
								}}
							/>
						</div>
					</div>
				) : (
					<div>
						<div className="prose prose-sm p-3 mx-auto">
							<div className="mt-4 md:mt-16">
								<Article share={encoded} />
							</div>
						</div>
						<div className="code-box mt-5">
							<Editor
								code={decoded || code}
								cb={(v: string, l) => {
									setEncoded(v);
									setEncoded((v) => {
										console.log(v);
										return encode(v);
									});
								}}
							/>
						</div>
					</div>
				)}
			</main>
		</div>
	);
}

export const getServerSideProps: GetServerSideProps = async ({
	req,
	query,
}) => {
	const encoded = query?.code;

	const isHome = req.url === "/";

	if (isHome || typeof encoded !== "string") {
		return {
			props: {
				decoded: "",
			},
		};
	}

	const fixedBase64 = encoded.replaceAll(" ", "+");
	const decoded = decode(fixedBase64);

	// recordPaste("```" + decoded + "```");

	return {
		props: {
			decoded,
			isHome,
		},
	};
};
