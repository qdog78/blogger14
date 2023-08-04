DROP DATABASE IF EXISTS bugblogs_db;
CREATE DATABASE bugblogs_db;

-- user table:
-- 1) ID
-- 2) username
-- 3) email
-- 4) password

-- blogs table:
-- 1) ID
-- 2) headline
-- 3) content
-- 4) comment
-- OH SHIT DO COMMENTS GO IN A SEPARATE TABLE?? One post has many comments, each comment belongs to one post?
-- Separate table for pictures
-- library of common bug blogs and descriptions and sample picture
-- "What bug do you think might have bitten you?"
-- comparison across multiple bugs