#!/usr/bin/perl

################################################################################
# 
# �ėp���[���t�H�[�� pgdmailform.cgi �p �e���v���[�gURL�G���R�[�h�E�f�R�[�h
# PGD WORKS by Akira Motojima
# http://pgd.jp/
# 
#-------------------------------------------------------------------------------
# 
# �� ���s
# 
# �R�}���h���C������
# ./pgdmailform_tmplenc.pl encode|decode < form.html > form_NEW.html
# 
#-------------------------------------------------------------------------------
# 
# �� ����
# 
# 2008/04/17 �f�R�[�h�ɑΉ�
# 2008/04/08 �쐬
# 
################################################################################


##### require


use strict;


##### run

my $data;
while (<STDIN>) {
	
	$data .= $_;
	
}

# �����Ώۈꗗ���擾
my @match_str = $data =~ /TMPL_IF\s+name=\"[\w\_]+\-[^\"]+/g;

# ������̕�����𐶐�
my %str2code;
foreach my $str (@match_str) {
	
	# ��������/���Ȃ��ӏ������o
	$str =~ /(TMPL_IF\s+name=\"[\w\_]+\-)([^\"]+)/g;
	my $str_not = $1;
	my $str_do = $2;
	
	# �f�R�[�h�̏ꍇ
	if ($ARGV[0] eq 'decode') {
		
		$str_do =~ tr/+/ /;
		$str_do =~ s/%([0-9A-Fa-f][0-9A-Fa-f])/pack('H2', $1)/eg;
		
	# �G���R�[�h�̏ꍇ
	} else {
		
		$str_do =~ s/([^a-zA-Z0-9_.!~*'()-])/'%'.unpack('H2',$1)/eg;
		
		# �G���R�[�h�s�v�������ꍇ�X�L�b�v
		if ($str_do !~ /\%\w\w/) { next;}
		
	}
	
	$str2code{$str} = $str_not . $str_do;
	
}

# 1���ڂ��u�����s��
foreach my $str (keys %str2code) {
	
	$data =~ s/\Q$str\E/$str2code{$str}/g;
	
}

print $data;

exit;