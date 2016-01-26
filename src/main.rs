extern crate goji;

use goji::Jira;
use std::env;

fn main() {
    if let (Some(host), Some(user), Some(pass)) = (env::args().nth(1), env::args().nth(2), env::args().nth(3)) {
        let jira = Jira::new(host, user, pass);
        println!("{:?}", jira.search("assignee=doug"));
    }
}
